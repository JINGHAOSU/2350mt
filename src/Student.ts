import { Course } from './Course';

export interface Student {
  readonly baseFees: number;
  readonly perCreditFee: number;
  readonly numCredits: number;
  readonly totalFees: number;
  add(c: Course): void;
}

export class StudentImp1 implements Student {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  readonly baseFees: number = 200;

  readonly perCreditFee: number = 100;

  get numCredits(): number {
    return this.creditCount;
  }

  get totalFees(): number {
    return this.baseFees + this.perCreditFee * this.numCredits;
  }

  private creditCount = 0;

  add(c: Course): void {
    this.creditCount += c.credits;
  }
}

export class InternationalStudent extends StudentImp1 {
  readonly baseFees: number = 250;

  readonly perCreditFee: number = 590;
}

export class SeniorStudent extends StudentImp1 {
  readonly perCreditFee: number = 0;
}
