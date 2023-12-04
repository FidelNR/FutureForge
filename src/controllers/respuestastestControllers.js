const RespuestasTestModel= require('../models/respuestastestModel');

class respuestasTestController{
    static async indexGet(req,res){
        let data =await RespuestasTestModel.consultar();
        res.send(data);
        }

    /*static async getMenuById(req, res) {
        const menuId = req.params.id;
        let data = await MenusModel.consultarPorId(menuId);
        res.send(data);
        }*/

    static async ItemGet(req,res){
        let id = req.params.id;
        let data = await RespuestasTestModel.consultarPorId(id);
        if(data.length >0){
            res.send(data[0]);
            return;
        }
        res.status(404).send({error:'Not found'});
        
    }

    static async indexPost(req,res){
        let data = {
            'nombre':req.body.nombre
        };
        await RespuestasTestModel.insertar(data);

    }
}

module.exports=respuestasTestController;