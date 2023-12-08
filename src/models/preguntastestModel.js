const {connectToMysql}=require('../dbconnection');

class PreguntasTestModel{
    static async consultar(){
        let db=await connectToMysql();
        let query =db("Preguntas_Test");
        return await query;
    }

    /*static async consultarPorId(id) {
        let query = db('menus').where('id_menu', id );
        return await query;
      }*/
    
      static async consultarPorId(id){
        let db=await connectToMysql();
        return await db("Preguntas_Test").where('ID_Pregunta',id);
      }

      static async insertar(pregunta){
        let db=await connectToMysql();
        const result = await db('Preguntas_Test').insert(pregunta).returning('ID_Pregunta');
        return result[0];
      }

      static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('Preguntas_Test').where('ID_Pregunta', id).update(campos);
    }

    static async reemplazar(id, newData) {
      let db = await connectToMysql();
      newData['ID_Pregunta'] = id;
      await db('Preguntas_Test').where('ID_Pregunta', id).del();
      await db.insert(newData).into('Preguntas_Test');
      return id;
  }

}

module.exports=PreguntasTestModel;