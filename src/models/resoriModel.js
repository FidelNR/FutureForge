const {connectToMysql}=require('../dbconnection');

class ResOriModel{
    static async consultar(){
        let db=await connectToMysql();
        let query =db("Resultados_Orientacion");
        return await query;
    }

    /*static async consultarPorId(id) {
        let query = db('menus').where('id_menu', id );
        return await query;
      }*/
    
      static async consultarPorId(id){
        let db=await connectToMysql();
        return await db("Resultados_Orientacion").where('ID_Resultado',id);
      }

      static async insertar(respuesta){
        let db=await connectToMysql();
        const result = await db('Resultados_Orientacion').insert(respuesta).returning('ID_Resultado');
        return result[0];
      }

      static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('Resultados_Orientacion').where('ID_Resultado', id).update(campos);
    }

    static async reemplazar(id, newData) {
      let db = await connectToMysql();
      newData['ID_Resultado'] = id;
      await db('Resultados_Orientacion').where('ID_Resultado', id).del();
      await db.insert(newData).into('Resultados_Orientacion');
      return id;
  }
}

module.exports=ResOriModel;