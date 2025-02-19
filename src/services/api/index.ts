import instance from '@/services/instance'

const getGenres = async (): Promise<string[]> => await instance.get('/genres')

export { getGenres }
