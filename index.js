/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

module.exports = function(date)
{
   const response = new Object();
   Date.prototype.isValid = function (d) { return !isNaN(Date.parse(d)) } ;
   if(date.isValid)
   {
      response.year = date.getFullYear();
      response.month = date.getMonth(),
      response.day = date.getDay();
      response.hour = date.getHours();
      response.minute = date.getMinutes();
      response.getMysqlDate = function(err)
      {
         if(err) return (err);
         //yy-mm-dd mysql date
         return this.year +"-"+ this.month +"-"+ this.day;
      }
      response.getGmtDate = function()
      {
          //GMT Date
          
          return 'GMT DAte';
      }
      
   }
   return response; 
}

