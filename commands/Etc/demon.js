module.exports = {
    name: 'demon',
    aliases: ['demon'],
    category: 'Etc',
    utilisation: '{prefix} demon @user',

execute(client, message, args) 
 {
  
        nouns = ["лорд ", "демон ","убийца ","агент ", "дух ","мертвец ","ангел ","дракон ","архонт ", "рыцарь ","гладиатор ", "квазар ", "пульсар ", "зомби", "ниндзя", "адвокат "];
        adjectives = ["демонический ", "мёртвый ","падший ","божественный ","ангельский ", "лютый ", "современный ", "бессмертный ", "бинауральный "];
        adjectives_end_female = ["смерти ",  "преисподней ","души ","жизни ","погибели ","жестокости ","дезинтеграции ","магии ","энергетики ","энергии ", 'души ', "молнии ", "пустоты "];
        adjectives_end_male = ["мрака ", "грома", "влияния ", "ада ", "рая "];
        adjectives_end_multi = ["веществ", "грибов", "трипов", "вкидов"]
        adjectives_preend_female = [ "мёртвой ", "демонической " , "божественной ","падшей " ,"ангельской ", ]
        adjectives_preend_male = [ "мёртвого", "демонического", "божественного" , "падшего " , "ангельского "]
        adjectives_preend_multi = ["странных", 'демонических']
        numbers = [1,2,3,4,5,6,7,8,9  ]
        preefix = ['Полу','Полу','Полу','Полу','Полу', 'Мега', "Гипер", "Терра", "Сверх", "Омега", "Ультра", "Альфа", "Крово", "Анти"]

        var rand1 = Math.floor(Math.random() * nouns.length);
        var rand2 = Math.floor(Math.random() * adjectives.length);
        var rand3 = Math.floor(Math.random() * adjectives_end_male.length);
        var rand4 = Math.floor(Math.random() * adjectives_end_female.length);
        var rand5 = Math.floor(Math.random() * adjectives_preend_female.length);
        var rand6 = Math.floor(Math.random() * adjectives_preend_male.length);
        var rand7 = Math.floor(Math.random() * numbers.length);
        var rand8 = Math.floor(Math.random() * adjectives_end_multi.length);
        var rand9 = Math.floor(Math.random() * adjectives_preend_multi.length);
        var rand10 = Math.floor(Math.random() * preefix.length);

                if ( numbers[rand7] === 1)
                {
        var content = adjectives[rand2]  + nouns[rand1] + adjectives_preend_female[rand5] + adjectives_end_female[rand4]  ;
        console.log('number[array] === 1, algorithm =' + rand2 + " "  + rand1 + " " + rand5 + " " + rand4);
        if (content === "undefined")
        { 
          var content = '😈';
        }
                }
              else  if ( numbers[rand7] === 2)
                {
        var content = adjectives[rand2]  + nouns[rand1] + adjectives_preend_male[rand6] + " " + adjectives_end_male[rand3]  ;
        console.log('number[array] === 2, algorithm =' + rand2 + " " + rand1 + " " + rand6 +  " " + rand3);
        if (content === "undefined")
                  { 
                    var content = '😈';
                  }
                }
                else  if ( numbers[rand7] === 3)
                {
        var content = adjectives[rand2]  + nouns[rand1] + adjectives_preend_multi[rand9] + " " + adjectives_end_multi[rand8]  ;
        console.log('number[array] === 3, algorithm =' + rand2 + " "  + rand1 + " " + rand9  + " " + rand8);
        if (content === "undefined")
        { 
          var content = '😈';
        }
                }
                else if ( numbers[rand7] === 4 )
                {
                  var content = adjectives[rand2]  + nouns[rand1];
                  console.log('number[array] === 4, algorithm =' +  rand2 + " "    + rand1);
                  if (content === "undefined")
                  { 
                    var content = '😈';
                  }
                }
                else if (numbers[rand7] === 5)
                {
                  var content = nouns[rand1];
                  console.log('number[array] === 5, algorithm ='  + rand1);
                  if (content === "undefined")
                  { 
                    var content = '😈';
                  }
                }
                else if ( numbers[rand7] === 6)
                {
        var content = preefix[rand10] + adjectives[rand2]  + nouns[rand1] + adjectives_preend_female[rand5] + adjectives_end_female[rand4]  ;
        console.log('number[array] === 6, algorithm =' + rand10 + " " + rand2 + " "  + rand1 + " " + rand5 + " " + rand4);
        if (content === "undefined")
        { 
          var content = '😈';
        }
                }
              else  if ( numbers[rand7] === 7)
                {
        var content = preefix[rand10] + adjectives[rand2]  + nouns[rand1] + adjectives_preend_male[rand6] + " " + adjectives_end_male[rand3]  ;
        console.log('number[array] === 7, algorithm =' + rand10 + " " + rand2 + " "  + rand1 + " " + rand6 + " " + rand3);
        if (content === "undefined")
        { 
          var content = '😈';
        }
                }
                else  if ( numbers[rand7] === 8)
                {
        var content = preefix[rand10] + adjectives[rand2]  + nouns[rand1] + adjectives_preend_multi[rand9] + " " + adjectives_end_multi[rand8]  ;
                  if (content === "undefined")
                  { 
                    var content = '😈';
                  }
        console.log('number[array] === 8, algorithm =' + rand10 +" " + rand2 + " "  + rand1 + " " + rand9 + " " + rand8);

                }
                else  if ( numbers[rand7] === 9)
                {
        var content =  adjectives[rand2]  + preefix[rand10] +nouns[rand1] + adjectives_preend_multi[rand9] + " " + adjectives_end_multi[rand8]  ;
                  if (content === "undefined")
                  { 
                    var content = '😈';
                  }
        console.log('number[array] === 9, algorithm =' + rand2 + " " + rand10 + " "  + rand1 + " " + rand9 + " " + rand8);

                }
        message.channel.send(`${content}`);

      },
      };