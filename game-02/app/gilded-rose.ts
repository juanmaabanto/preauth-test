export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
      this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
        let rule = rules[item.name] as RuleWithFactor;
        if (!rule) {
            rule = rules.Normal as RuleWithFactor;
        }

        let factor = 1;
        if (rule) {
            factor = rule.getFactor(item.sellIn);
        }

        item.quality = Math.min(Math.max(item.quality*factor + rule.increment, MIN_QUALITY), rule.maxQuality);
        item.sellIn += rule.days;
    }

    return this.items;
  }
}

const MIN_QUALITY = 0;

interface RuleBase {
    increment: number;
    days: number;
    maxQuality: number;
}

interface RuleWithFactor extends RuleBase {
    getFactor: (sellIn: number) => number;
}

type Rules = {
    [key: string]: RuleBase | RuleWithFactor;
};

const rules: Rules = {
    'Aged Brie': {
        increment: 1,
        days: -1,
        maxQuality: 50
    },
    'Sulfuras, Hand of Ragnaros': {
        increment: 0,
        days: 0,
        maxQuality: 80
    },
    'Backstage passes to a TAFKAL80ETC concert': {
        increment: 1,
        days: -1,
        getFactor: function(sellIn: number): number {
            if (sellIn < 0) {
                return -50;
            }
            if (sellIn < 6) {
                return 3;
            }
            if (sellIn < 11) {
                return 2;
            }
            return 1;
        },
        maxQuality: 50
    },
    'Conjured': {
        increment: -2,
        days: -1,
        maxQuality: 50
    },
    'Normal': {
        increment: -1,
        days: -1,
        maxQuality: 50
    }
}