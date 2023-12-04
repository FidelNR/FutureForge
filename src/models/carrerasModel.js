const {connectToMysql}=require('../dbconnection');

class CarrerasModel{
    static async consultar(){
        let db=await connectToMysql();
        let query =db("Carreras");
        return await query;
    }

    /*static async consultarPorId(id) {
        let query = db('menus').where('id_menu', id );
        return await query;
      }*/
    
      static async consultarPorId(id){
        let db=await connectToMysql();
        return await db("Carreras").where('ID_Carrera',id);
      }

      static async insertar(carrera){
        let db=await connectToMysql();
        return await db('Carreras').insert(carrera)
      }
}

module.exports=CarrerasModel;