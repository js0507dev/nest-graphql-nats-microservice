import { PartialType } from '@nestjs/mapped-types';

import { CreateToyInput } from './create-toy.input';

export class UpdateToyInput extends PartialType(CreateToyInput) {
  id: number;
}
