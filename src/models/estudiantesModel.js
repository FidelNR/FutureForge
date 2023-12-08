const {connectToMysql}=require('../dbconnection');

class EstudiantesModel{
    static async consultar(){
        let db=await connectToMysql();
        let query =db("Estudiantes");
        return await query;
    }

    /*static async consultarPorId(id) {
        let query = db('menus').where('id_menu', id );
        return await query;
      }*/
    
      static async consultarPorId(id){
        let db=await connectToMysql();
        return await db("Estudiantes").where('ID_Estudiante',id);
      }

      static async insertar(estudiante){
        let db=await connectToMysql();
        const result = await db('Estudiantes').insert(estudiante).returning('ID_Estudiante');
        return result[0];
      }

      static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('Estudiantes').where('ID_Estudiante', id).update(campos);
    }

    static async reemplazar(id, newData) {
      let db = await connectToMysql();
      newData['ID_Estudiante'] = id;
      await db('Estudiantes').where('ID_Estudiante', id).del();
      await db.insert(newData).into('Estudiantes');
      return id;
  }
}

module.exports=EstudiantesModel;