import {rules, RuleWithFactor} from './rules';

const MIN_QUALITY = 0;

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

  /**
   * Updates the quality and value of items according to a set of rules
   * @returns items updated
   */
  updateQuality() {
    for (const item of this.items) {
        let rule = rules[item.name] as RuleWithFactor;
        if (!rule) {
            rule = rules.Normal as RuleWithFactor;
        }

        let factor = 1;
        if (typeof rule.getFactor === 'function') {
            factor = rule.getFactor(item.sellIn);
        }

        item.quality = Math.min(Math.max(item.quality*factor + rule.increment, MIN_QUALITY), rule.maxQuality);
        item.sellIn += rule.days;
    }

    return this.items;
  }
}


