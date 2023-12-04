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
}

module.exports=RespuestasTestModel;