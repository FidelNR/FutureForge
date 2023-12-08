const {connectToMysql}=require('../dbconnection');

class RespuestasTestModel{
    static async consultar(){
        let db=await connectToMysql();
        let query =db("Respuestas_Test");
        return await query;
    }

    /*static async consultarPorId(id) {
        let query = db('menus').where('id_menu', id );
        return await query;
      }*/
    
      static async consultarPorId(id){
        let db=await connectToMysql();
        return await db("Respuestas_Test").where('ID_Respuesta',id);
      }

      /*static async insertar(carrera){
        return await db('Carreras').insert(carrera)
      }*/

      static async insertar(resptest){
        let db=await connectToMysql();
        const result = await db('Respuestas_Test').insert(resptest).returning('ID_Respuesta');
        return result[0];
      }

      static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('Respuestas_Test').where('ID_Respuesta', id).update(campos);
    }

    static async reemplazar(id, newData) {
      let db = await connectToMysql();
      newData['ID_Respuesta'] = id;
      await db('Respuestas_Test').where('ID_Respuesta', id).del();
      await db.insert(newData).into('Respuestas_Test');
      return id;
  }
}

module.exports=RespuestasTestModel;