/*
 * Generated by orval v4.2.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import axios from 'axios';
import faker from 'faker';
import { rest } from 'msw';
import { CreatePetsBody, ListPetsParams, Pet, Pets } from '../model';
import listPetsMutator from '../mutator/response-type';

export const getSwaggerPetstore = () => ({
  listPets(params?: ListPetsParams, version: number = 1) {
    return listPetsMutator<Pets>({
      url: `/v${version}/pets`,
      method: 'get',
      params,
    });
  },
  createPets(createPetsBody: CreatePetsBody, version: number = 1) {
    return axios.post<unknown>(`/v${version}/pets`, createPetsBody);
  },
  showPetById(petId: string, version: number = 1) {
    return axios.get<Pet>(`/v${version}/pets/${petId}`);
  },
});

export const getSwaggerPetstoreMSW = () => [
  rest.get('*/v:version/pets', (req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(
        [...Array(faker.random.number({ min: 1, max: 10 }))].map(() => ({
          id: faker.random.number(),
          name: 'jon',
          tag: 'jon',
        })),
      ),
    );
  }),
  rest.post('*/v:version/pets', (req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200, 'Mocked status'));
  }),
  rest.get('*/v:version/pets/:petId', (req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(
        (() => ({
          id: faker.random.number({ min: 1, max: 99 }),
          name: faker.name.firstName(),
          tag: faker.helpers.randomize([faker.random.word(), undefined]),
        }))(),
      ),
    );
  }),
];
