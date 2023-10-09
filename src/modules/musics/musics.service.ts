import { Injectable } from '@nestjs/common';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';
import { MusicsRepository } from './repositories/music.repository';

@Injectable()
export class MusicsService {
  constructor(private musicRepository: MusicsRepository) {}
  async create(createMusicDto: CreateMusicDto) {
    const newMusic = await this.musicRepository.create(createMusicDto);
    return newMusic;
  }

  async findAll(group: string | undefined) {
    return this.musicRepository.findAll(group);
  }

  async findOne(id: string) {
    const findMusic = await this.musicRepository.findOne(id);
    return findMusic;
  }

  update(id: number, updateMusicDto: UpdateMusicDto) {
    return `This action updates a #${id} music`;
  }

  remove(id: number) {
    return `This action removes a #${id} music`;
  }
}
