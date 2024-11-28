import { dataNotes } from "../stores/store"

export const getNote = () => {

}

export const putNote = (data) => {
   dataNotes.update(datanote => {
      const index = datanote.findIndex(dataNote => dataNote.notaID == data.notaID)
      datanote[index] = data;
      return datanote;
   })
}

export const postNote = (data) => {
   dataNotes.update(datanote => [...datanote, data])
}

export const dropNote = (id) => {
   dataNotes.update(datanote => datanote.filter(note => note.notaID !== id))
}