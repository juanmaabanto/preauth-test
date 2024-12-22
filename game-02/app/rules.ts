/**
 * defines the rules for items, the amount that increases or decreases 
 * the quality and value, and the maximum quality of an item
 */
interface RuleBase {
  increment: number;
  days: number;
  maxQuality: number;
}

/**
 * defines a function to calculate the factor for special cases
 */
export interface RuleWithFactor extends RuleBase {
  getFactor: (sellIn: number) => number;
}

type Rules = {
  [key: string]: RuleBase | RuleWithFactor;
};

export const rules: Rules = {
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