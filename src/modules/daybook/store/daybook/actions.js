import daybookApi from '@/api/daybookApi'

export const loadEntries = async ({ commit }) => {
  const { data } = await daybookApi.get('/entries.json')

  if (!data) {
    return commit('setEntries', [])
  }

  const entries = []

  for (let id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id]
    })
  }
  commit('setEntries', entries)
}

export const updateEntry = async ({ commit }, entry) => {
  const { date, picture, text } = entry
  const dataToSave = { date, picture, text }
  await daybookApi.put(`/entries/${entry.id}.json`, dataToSave)
  commit('updateEntry', { ...entry })
}

export const createEntry = async ({ commit }, entry) => {
  const { date, picture, text } = entry
  const dataToSave = { date, picture, text }
  const { data } = await daybookApi.post('/entries.json', dataToSave)
  commit('addEntry', { id: data.name, ...dataToSave })
  return data.name
}

export const deleteEntry = async ({ commit }, id) => {
  await daybookApi.delete(`/entries/${id}.json`)
  commit('deleteEntry', id)
}
