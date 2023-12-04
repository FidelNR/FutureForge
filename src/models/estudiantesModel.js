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

      /*static async insertar(carrera){
        return await db('Carreras').insert(carrera)
      }*/
}

module.exports=EstudiantesModel;