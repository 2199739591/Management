//放信息的验证信息，并发给router下的employee
const joi = require('joi')

const id = joi.number().integer().min(1).required().error(new Error('id格式不正确'))
const name = joi.string().min(1).max(10).required().error(new Error('name格式不正确'))
const telnumber = joi.string().min(11).max(11).error(new Error('电话格式不正确'))
const salary = joi.number().integer().min(1).error(new Error('工资不正确'))







exports.add_employee_schema = {
        body: {
            id,
            name,
            telnumber,
            salary
        }
    },
    exports.delete_employee_schema = {
        params: {
            id
        }
    },


    exports.update_employee_schema = {
        body: {
            id,
            name,
            telnumber,
            salary
        }
    }