export interface Course {
  readonly name: string;
  readonly credits: number;
}

export class CourseImp1 implements Course {
  constructor(public readonly name: string, public readonly credits: number) {}
}
