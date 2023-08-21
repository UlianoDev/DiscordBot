const { SlashCommandBuilder, PermissionFlagsBits, SharedSlashCommandOptions, SlashCommandUserOption } = require("discord.js");
const { exit } = require("node:process");



module.exports = {
  data: new SlashCommandBuilder()
    .setName("sql")
    .setDescription("Analisa query do MySQL")
    .addStringOption((string) =>
      string.setName("query").setDescription("query a ser analisada").setRequired(true)
    ),

  async execute(interaction) {
    const query =
      interaction.options.getString("query") ?? "No query provided";
 

    const message = await interaction.reply({
      content: `String digitada: ${query}`,
      fetchReply: true,
    });
    updateValidator(query,message);


  },
};

async function updateValidator(query,message){
    let validator = [0]

    const arrayQueryNotFiltered = await query.split(' ')

    const arrayQuery = killExtraSpaces(arrayQueryNotFiltered);

    arrayQuery[0] === "update" || arrayQuery[0] === "UPDATE"
      ? message.react("👌")
      : message.reactions.removeAll().then(()=>{message.react("❌")})
    arrayQuery[2] === "set" || arrayQuery[2] === "SET"
      ? message.react("👌")
      : message.reactions.removeAll().then(()=>{message.react("❌")})
      if(!arrayQuery[3]){
        message.reactions.removeAll().then(() => {
          message.react("❌");
        });
        return
      }
    //update xxx set 'xxx= valor' ou 'xxx=valor' ou 'xxx = valor'
    if (findEqualInSintaxe(arrayQuery[3], validator)) {
      if (validator[0] == 1){
        validatorOne(arrayQuery, message);
      }
      if (validator[0] == 2){
        validatorTwo(arrayQuery, message);
      }
    }
   if (findEqualInSintaxe(arrayQuery[3], validator) === false) {
     //update xxx set 'xxx =valor'

     if (findEqualInSintaxe(arrayQuery[4], validator)) {
       validator[0] == 2
         ? validatorTwo(arrayQuery, message)
         : validator[0] == 3 ? validatorThree(arrayQuery, message) : console.log('seila');
     } 
   }
    

    if(validator[0] == 0){
      message.reactions.removeAll().then(() => {
        message.react("❌");
      });
    }
    console.log(arrayQuery);
    console.log(validator)

}
function killExtraSpaces(arrayQuery) {
 return arrayQuery.filter((element) => element.trim() !== "");
}
function findEqualInSintaxe(elementArrayQuery,validator){
    let booleanValidator = false
    if(!elementArrayQuery){
      return false
    }
    const sintaxeValidator = elementArrayQuery.split('')

    sintaxeValidator.map((event)=>{
        if(event === '='){

            //tabela=valor
            const absoluteValue = 1
            validator[0] = Math.abs(absoluteValue)
            return booleanValidator = true;
        }
        
    })
            if (elementArrayQuery === "=") {

              const absoluteValue = 3;
              validator[0] = Math.abs(absoluteValue);
              return (booleanValidator = true);
            }
        if (elementArrayQuery.endsWith("=")) {

            //tabela= valor
            const absoluteValue = 2;
            validator[0] = Math.abs(absoluteValue);
            return booleanValidator = true;
            }
        if(elementArrayQuery.startsWith('=')){

            const absoluteValue = 2;
            validator[0] = Math.abs(absoluteValue);
            return (booleanValidator = true);
        }

        
    return booleanValidator;
}
function validatorOne(arrayQuery,message){
    arrayQuery[4] === "WHERE" || arrayQuery[4] === "where"
      ? message.react("👌")
      : message.reactions.removeAll().then(()=>{message.react("❌")})
      EqualValidatorInWhereClause(arrayQuery, 4, message);

}
function validatorTwo(arrayQuery,message){
    arrayQuery[5] === "WHERE" || arrayQuery[5] === "where"
      ? message.react("👌")
      : message.reactions.removeAll().then(()=>{message.react("❌")})
      EqualValidatorInWhereClause(arrayQuery, 5, message);
}
async function validatorThree(arrayQuery, message) {

  arrayQuery[6] === "WHERE" || arrayQuery[6] === "where"
    ? message.react("👌")
    : message.reactions.removeAll().then(()=>{message.react("❌")})
    EqualValidatorInWhereClause(arrayQuery, 6, message);
}

function EqualValidatorInWhereClause(array,position,message){



  if (array[position + 1] == undefined){
    message.reactions.removeAll().then(() => {
      message.react("❌");
    });
    return
  }
    if (array[position + 1].endsWith("=") && array[position + 2]) {
      //se WHERE tabela= valor
      console.log("passou aqui");
      message.react("👌");
    } 
  //se WHERE tabela=valor; ou WHERE tabela=valor ;
  if(array[position+1].split('').find((e)=>e =='=')){
    array[position + 1].endsWith(";")
      ? message.react("👌")
      : array[position + 2] == ";"
      ? message.react("👌")
      : message.reactions.removeAll().then(() => {
          message.react("❌");
        });
        return
  }
  //se =valor;  
  if(array[position + 2].startsWith('=') && array[position + 2].endsWith(';')){
    message.react("👌");
    return
  }
  //se =valor ;
  if(array[position + 2].startsWith('=') && array[position + 3] ==';'){
    message.react("👌");
    return
  }
  //se where tabela = valor ;
  if (
    array[position + 2] == "=" &&
    array[position + 3] &&
    array[position + 4] == ';'
  ) {

    message.react("👌");
    return
  } 
  //se where tabela = valor;
  if (array[position + 2] == "=" && array[position + 3].endsWith(';')) {
    message.react("👌");
    return
  } 
    else {

      message.reactions.removeAll().then(() => {
        message.react("❌");
      });
    }


}
