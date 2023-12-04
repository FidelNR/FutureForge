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

      /*static async insertar(carrera){
        return await db('Carreras').insert(carrera)
      }*/
}

module.exports=PreguntasTestModel;