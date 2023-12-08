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
        const result = await db('Carreras').insert(carrera).returning('ID_Carrera');
        return result[0];
      }

      static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('Carreras').where('ID_Carrera', id).update(campos);
    }

    static async reemplazar(id, newData) {
      let db = await connectToMysql();
      newData['ID_Carrera'] = id;
      await db('Carreras').where('ID_Carrera', id).del();
      await db.insert(newData).into('Carreras');
      return id;
  }
}

module.exports=CarrerasModel;