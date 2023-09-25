import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateMusicDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  album: string;

  @IsString()
  @IsNotEmpty()
  artist: string;

  @IsString()
  @IsNotEmpty()
  genre: string;

  @IsString()
  @IsNotEmpty()
  year: string;

  @IsString()
  @IsOptional()
  cover_image: string | null;

  @IsString()
  @IsOptional()
  music_url: string | null;

  @IsString()
  @IsOptional()
  user_id?: string;
}
