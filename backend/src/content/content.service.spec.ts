import { Test, TestingModule } from '@nestjs/testing';
import { ContentService } from './content.service';

describe('ContentService', () => {
  let service: ContentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContentService],
    }).compile();

    service = module.get<ContentService>(ContentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('Debe devolver una matriz de contenido de los datos', () => {
      const result = service.findAll();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
    });
  });

  describe('findOne', () => {
    it('Devuelvo contenido por su id de mi data.json', () => {
      const id = '64acfe1efebd5d00024c3364';
      const result = service.findOne(id);
      expect(result).toBeDefined();
      expect(result._id).toBe(id);
    });

    it('Devuelvo indefinido si el contenido o el id no existe', () => {
      const id = 'invalid-id';
      const result = service.findOne(id);
      expect(result).toBeUndefined();
    });
  });
});
