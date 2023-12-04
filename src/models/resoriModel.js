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

      /*static async insertar(carrera){
        return await db('Carreras').insert(carrera)
      }*/
}

module.exports=ResOriModel;