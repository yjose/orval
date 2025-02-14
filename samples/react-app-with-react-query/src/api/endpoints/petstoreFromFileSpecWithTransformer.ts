/*
 * Generated by orval v4.2.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from 'react-query';
import { CreatePetsBody, ListPetsParams, Pet, Pets } from '../model';
import { customInstance } from '../mutator/custom-instance';

type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (
  ...args: any
) => Promise<infer R>
  ? R
  : any;

export const listPets = <Data = unknown>(
  params?: ListPetsParams,
  version: number = 1,
) => {
  return customInstance<Data extends unknown ? Pets : Data>({
    url: `/v${version}/pets`,
    method: 'get',
    params,
  });
};

export const getListPetsQueryKey = (
  params?: ListPetsParams,
  version: number = 1,
) => [`/v${version}/pets`, ...(params ? [params] : [])];

export const useListPetsInfinite = <
  Data extends unknown = unknown,
  Error extends unknown = unknown
>(
  params?: ListPetsParams,
  version: number = 1,
  queryConfig?: UseInfiniteQueryOptions<
    AsyncReturnType<typeof listPets>,
    Error
  >,
) => {
  const queryKey = getListPetsQueryKey(params, version);

  const query = useInfiniteQuery<AsyncReturnType<typeof listPets>, Error>(
    queryKey,
    ({ pageParam }) => listPets<Data>({ limit: pageParam, ...params }, version),
    { enabled: !!version, ...queryConfig },
  );

  return {
    queryKey,
    ...query,
  };
};

export const useListPets = <
  Data extends unknown = unknown,
  Error extends unknown = unknown
>(
  params?: ListPetsParams,
  version: number = 1,
  queryConfig?: UseQueryOptions<AsyncReturnType<typeof listPets>, Error>,
) => {
  const queryKey = getListPetsQueryKey(params, version);

  const query = useQuery<AsyncReturnType<typeof listPets>, Error>(
    queryKey,
    () => listPets<Data>(params, version),
    { enabled: !!version, ...queryConfig },
  );

  return {
    queryKey,
    ...query,
  };
};

export const createPets = <Data = unknown>(
  createPetsBody: CreatePetsBody,
  version: number = 1,
) => {
  return customInstance<Data extends unknown ? unknown : Data>({
    url: `/v${version}/pets`,
    method: 'post',
    data: createPetsBody,
  });
};

export const useCreatePets = <
  Data extends unknown = unknown,
  Error extends unknown = unknown
>(
  mutationConfig?: UseMutationOptions<
    AsyncReturnType<typeof createPets>,
    Error,
    { data: CreatePetsBody; version?: number }
  >,
) => {
  return useMutation<
    AsyncReturnType<typeof createPets>,
    Error,
    { data: CreatePetsBody; version?: number }
  >((props) => {
    const { data, version } = props || {};

    return createPets<Data>(data, version);
  }, mutationConfig);
};
export const showPetById = <Data = unknown>(
  petId: string,
  version: number = 1,
) => {
  return customInstance<Data extends unknown ? Pet : Data>({
    url: `/v${version}/pets/${petId}`,
    method: 'get',
  });
};

export const getShowPetByIdQueryKey = (petId: string, version: number = 1) => [
  `/v${version}/pets/${petId}`,
];

export const useShowPetByIdInfinite = <
  Data extends unknown = unknown,
  Error extends unknown = unknown
>(
  petId: string,
  version: number = 1,
  queryConfig?: UseInfiniteQueryOptions<
    AsyncReturnType<typeof showPetById>,
    Error
  >,
) => {
  const queryKey = getShowPetByIdQueryKey(petId, version);

  const query = useInfiniteQuery<AsyncReturnType<typeof showPetById>, Error>(
    queryKey,
    () => showPetById<Data>(petId, version),
    { enabled: !!(version && petId), ...queryConfig },
  );

  return {
    queryKey,
    ...query,
  };
};

export const useShowPetById = <
  Data extends unknown = unknown,
  Error extends unknown = unknown
>(
  petId: string,
  version: number = 1,
  queryConfig?: UseQueryOptions<AsyncReturnType<typeof showPetById>, Error>,
) => {
  const queryKey = getShowPetByIdQueryKey(petId, version);

  const query = useQuery<AsyncReturnType<typeof showPetById>, Error>(
    queryKey,
    () => showPetById<Data>(petId, version),
    { enabled: !!(version && petId), ...queryConfig },
  );

  return {
    queryKey,
    ...query,
  };
};
