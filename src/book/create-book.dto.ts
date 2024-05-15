import { IsInt, IsNotEmpty, IsString } from "class-validator";

// create-book.dto.ts
export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  readonly author: string;
  
  @IsInt()
  readonly publishedYear: number;
  }
  