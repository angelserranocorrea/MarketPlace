import { Test, TestingModule } from '@nestjs/testing';
import { ContentController } from './content.controller';
import { ContentService } from './content.service';

describe('ContentController', () => {
  let controller: ContentController;
  let contentService: ContentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContentController],
      providers: [
        {
          provide: ContentService,
          useValue: {
            findAll: jest.fn(),
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<ContentController>(ContentController);
    contentService = module.get<ContentService>(ContentService);
  });

  it('Prueba que el controlador esta definido', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('Devuelve todos los contenidos', async () => {
      const expectedContent = [
        {
          _id: '1',
          titulo: 'Title 1',
          descripcion: 'Description 1',
          precio: 100,
          image_url: 'image_url_1',
        },
        {
          _id: '2',
          titulo: 'Title 2',
          descripcion: 'Description 2',
          precio: 200,
          image_url: 'image_url_2',
        },
      ];

      // Mock the ContentService's findAll method to return the expectedContent
      contentService.findAll = jest.fn().mockResolvedValue(expectedContent);

      const result = await controller.findAll();
      expect(result).toEqual(expectedContent);
    });
  });

  describe('findOne', () => {
    it('Devuelve un contenido filtrado por su id', async () => {
      const contentId = '1';
      const expectedContent = {
        _id: contentId,
        titulo: 'Title 1',
        descripcion: 'Description 1',
        precio: 100,
        image_url: 'image_url_1',
      };

      contentService.findOne = jest.fn().mockResolvedValue(expectedContent);

      const result = await controller.findOne(contentId);
      expect(result).toEqual(expectedContent);
    });
  });
});
