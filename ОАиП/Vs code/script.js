let input = document.querySelector(".day")
let button = document.querySelectorAll('.radio')
let form = document.querySelector('.form')
let elem = document.querySelector(".name")
let day = document.querySelector(".date")
let text = document.querySelector(".text")
let data
input.addEventListener('blur', (evt) => {data = func(evt.target.value)})
form.addEventListener('change', () => { if(button[0].checked){
    if(button[0].checked){horoscope1()
    }else if(button[1].checked){horoscope2()
    }else if(button[2].checked){horoscope3()}
}})
function func(date) {
    console.log(String(date).split('-'));
    return String(date).split('-');
}
function horoscope1(){
    day.textContent = 'Сегодня'
    if((data[1] == '03' && Number(data[2]) > 19) || (data[1] === '04' && Number(data[2]) < 20)){
        elem.textContent = zodiac[0]
        text.textContent = today[zodiac[0]]
    }
    if((data[1] == '04' && Number(data[2]) > 19) || (data[1] === '05' && Number(data[2]) < 21)){
        elem.textContent = zodiac[1]
        text.textContent = today[zodiac[1]]
    }
    if((data[1] == '05' && Number(data[2]) > 20) || (data[1] === '06' && Number(data[2]) < 21)){
        elem.textContent = zodiac[2]
        text.textContent = today[zodiac[2]]
    }
    if((data[1] == '06' && Number(data[2]) > 20) || (data[1] === '07' && Number(data[2]) < 22)){
        elem.textContent = zodiac[3]
        text.textContent = today[zodiac[3]]
    }
    if((data[1] == '07' && Number(data[2]) > 21) || (data[1] === '08' && Number(data[2]) < 23)){
        elem.textContent = zodiac[4]
        text.textContent = today[zodiac[4]]
    }
    if((data[1] == '08' && Number(data[2]) > 22) || (data[1] === '09' && Number(data[2]) < 23)){
        elem.textContent = zodiac[5]
        text.textContent = today[zodiac[5]]
    }
    if((data[1] == '09' && Number(data[2]) > 22) || (data[1] === '10' && Number(data[2]) < 23)){
        elem.textContent = zodiac[6]
        text.textContent = today[zodiac[6]]
    }
    if((data[1] == '10' && Number(data[2]) > 22) || (data[1] === '11' && Number(data[2]) < 22)){
        elem.textContent = zodiac[7]
        text.textContent = today[zodiac[7]]
    }
    if((data[1] == '11' && Number(data[2]) > 21) || (data[1] === '12' && Number(data[2]) < 22)){
        elem.textContent = zodiac[8]
        text.textContent = today[zodiac[8]]
    }
    if((data[1] == '12' && Number(data[2]) > 21) || (data[1] === '01' && Number(data[2]) < 21)){
        elem.textContent = zodiac[9]
        text.textContent = today[zodiac[9]]
    }
    if((data[1] == '01' && Number(data[2]) > 20) || (data[1] === '02' && Number(data[2]) < 19)){
        elem.textContent = zodiac[10]
        text.textContent = today[zodiac[10]]
    }
    if((data[1] == '02' && Number(data[2]) > 18) || (data[1] === '03' && Number(data[2]) < 20)){
        elem.textContent = zodiac[11]
        text.textContent = today[zodiac[11]]
    }
}function horoscope2(){
    day.textContent = 'Сегодня'
    if((data[1] == '03' && Number(data[2]) > 19) || (data[1] === '04' && Number(data[2]) < 20)){
        elem.textContent = zodiac[0]
        text.textContent = tomorrow[zodiac[0]]
    }
    if((data[1] == '04' && Number(data[2]) > 19) || (data[1] === '05' && Number(data[2]) < 21)){
        elem.textContent = zodiac[1]
        text.textContent = tomorrow[zodiac[1]]
    }
    if((data[1] == '05' && Number(data[2]) > 20) || (data[1] === '06' && Number(data[2]) < 21)){
        elem.textContent = zodiac[2]
        text.textContent = tomorrow[zodiac[2]]
    }
    if((data[1] == '06' && Number(data[2]) > 20) || (data[1] === '07' && Number(data[2]) < 22)){
        elem.textContent = zodiac[3]
        text.textContent = tomorrow[zodiac[3]]
    }
    if((data[1] == '07' && Number(data[2]) > 21) || (data[1] === '08' && Number(data[2]) < 23)){
        elem.textContent = zodiac[4]
        text.textContent = tomorrow[zodiac[4]]
    }
    if((data[1] == '08' && Number(data[2]) > 22) || (data[1] === '09' && Number(data[2]) < 23)){
        elem.textContent = zodiac[5]
        text.textContent = tomorrow[zodiac[5]]
    }
    if((data[1] == '09' && Number(data[2]) > 22) || (data[1] === '10' && Number(data[2]) < 23)){
        elem.textContent = zodiac[6]
        text.textContent = tomorrow[zodiac[6]]
    }
    if((data[1] == '10' && Number(data[2]) > 22) || (data[1] === '11' && Number(data[2]) < 22)){
        elem.textContent = zodiac[7]
        text.textContent = tomorrow[zodiac[7]]
    }
    if((data[1] == '11' && Number(data[2]) > 21) || (data[1] === '12' && Number(data[2]) < 22)){
        elem.textContent = zodiac[8]
        text.textContent = tomorrow[zodiac[8]]
    }
    if((data[1] == '12' && Number(data[2]) > 21) || (data[1] === '01' && Number(data[2]) < 21)){
        elem.textContent = zodiac[9]
        text.textContent = tomorrow[zodiac[9]]
    }
    if((data[1] == '01' && Number(data[2]) > 20) || (data[1] === '02' && Number(data[2]) < 19)){
        elem.textContent = zodiac[10]
        text.textContent = tomorrow[zodiac[10]]
    }
    if((data[1] == '02' && Number(data[2]) > 18) || (data[1] === '03' && Number(data[2]) < 20)){
        elem.textContent = zodiac[11]
        text.textContent = tomorrow[zodiac[11]]
    }
}function horoscope3(){
    day.textContent = 'Сегодня'
    if((data[1] == '03' && Number(data[2]) > 19) || (data[1] === '04' && Number(data[2]) < 20)){
        elem.textContent = zodiac[0]
        text.textContent = week[zodiac[0]]
    }
    if((data[1] == '04' && Number(data[2]) > 19) || (data[1] === '05' && Number(data[2]) < 21)){
        elem.textContent = zodiac[1]
        text.textContent = week[zodiac[1]]
    }
    if((data[1] == '05' && Number(data[2]) > 20) || (data[1] === '06' && Number(data[2]) < 21)){
        elem.textContent = zodiac[2]
        text.textContent = week[zodiac[2]]
    }
    if((data[1] == '06' && Number(data[2]) > 20) || (data[1] === '07' && Number(data[2]) < 22)){
        elem.textContent = zodiac[3]
        text.textContent = week[zodiac[3]]
    }
    if((data[1] == '07' && Number(data[2]) > 21) || (data[1] === '08' && Number(data[2]) < 23)){
        elem.textContent = zodiac[4]
        text.textContent = week[zodiac[4]]
    }
    if((data[1] == '08' && Number(data[2]) > 22) || (data[1] === '09' && Number(data[2]) < 23)){
        elem.textContent = zodiac[5]
        text.textContent = week[zodiac[5]]
    }
    if((data[1] == '09' && Number(data[2]) > 22) || (data[1] === '10' && Number(data[2]) < 23)){
        elem.textContent = zodiac[6]
        text.textContent = week[zodiac[6]]
    }
    if((data[1] == '10' && Number(data[2]) > 22) || (data[1] === '11' && Number(data[2]) < 22)){
        elem.textContent = zodiac[7]
        text.textContent = week[zodiac[7]]
    }
    if((data[1] == '11' && Number(data[2]) > 21) || (data[1] === '12' && Number(data[2]) < 22)){
        elem.textContent = zodiac[8]
        text.textContent = week[zodiac[8]]
    }
    if((data[1] == '12' && Number(data[2]) > 21) || (data[1] === '01' && Number(data[2]) < 21)){
        elem.textContent = zodiac[9]
        text.textContent = week[zodiac[9]]
    }
    if((data[1] == '01' && Number(data[2]) > 20) || (data[1] === '02' && Number(data[2]) < 19)){
        elem.textContent = zodiac[10]
        text.textContent = week[zodiac[10]]
    }
    if((data[1] == '02' && Number(data[2]) > 18) || (data[1] === '03' && Number(data[2]) < 20)){
        elem.textContent = zodiac[11]
        text.textContent = week[zodiac[11]]
    }
}
let zodiac = ["Овен", "Телец", "Близнецы", "Рак", "Лев", "Дева", "Весы", "Скорпион", "Стрелец", "Козерог", "Водолей", "Рыбы"]
let today = {"Овен" : "Старайтесь действовать по намеченному плану, тогда вы многое успеете и заложите фундамент будущих достижений",
"Телец" : "Начните день с обсуждения идей и планов. Даже если вашу точку зрения примут не сразу, вы сумеете найти аргументы, чтобы убедить всех в своей правоте.",
    "Близнецы" : "В начале дня стоит заняться старыми неоконченными делами, иначе они еще долго будут напоминать о себе.",
    "Рак" : "Принимайте решения исходя из собственного опыта, не слишком прислушивайтесь к советам коллег.",
    "Лев" : "Сегодня не стоит обращать внимание на предчувствия. Скорее всего, они окажутся ложными.",
    "Дева" : "Сосредоточьтесь на рутинных задачах, требующих стандартного подхода. С утра будет немного сложно сохранять эмоциональную устойчивость.",
    "Весы" : "С утра будет непросто находить общий язык с окружающими. Стоит уделить максимум внимания тем задачам, от решения которых может напрямую зависеть ваша репутация.",
    "Скорпион" : "Ваши лидерские качества окажутся на высоте, поэтому самое время активно заниматься делами. Вы получите заслуженную похвалу и поддержку от руководства.",
    "Стрелец" : "Рабочий день пройдет успешно, вы заслужите поощрение от начальства. У вас хорошо получится решать сложные и запутанные вопросы. Коллеги и руководство смогут подсказать вам удачные идеи, но результат все равно будет зависеть от вас.",
    "Козерог" : "Потребуется максимум внимания и осторожности. Ничего критичного не произойдет, но здравый смысл и осмотрительность не повредят.",
    "Водолей" : "Вы будете склонны браться за несколько дел сразу и часто отвлекаться. Это может сказаться не лучшим образом на результатах работы, поэтому стоит постараться сосредоточиться на главном.",
    "Рыбы" : "Утро получится суетливым, вас будут часто отвлекать по мелочам коллеги и родственники. Поэтому самые сложные задачи отложите на пару часов, сведите общение к минимуму и займитесь несложными рутинными вопросами."
}
let tomorrow = {"Овен" : "Утром постарайтесь быть осмотрительными и не поддаваться излишнему оптимизму. Избегайте давать обещания, возможно, вы не сумеете их выполнить.",
"Телец" : "С важными делами вы справитесь быстро. Накопленных профессиональных знаний и опыта окажется достаточно, чтобы принять правильные решения, мотивировать окружающих на нужные действия и получить желаемый результат.",
"Близнецы" : "К решению любых проблем вы подойдете творчески, и именно благодаря этому добьетесь заметных успехов. ",
"Рак" : "Утром общаться с родственниками и коллегами будет непросто из-за обостренной чувствительности и восприимчивости.",
"Лев" : "С самого утра можно смело высказывать свои идеи и выдвигать предложения. Даже если изначально натолкнетесь на сопротивление, вы все равно сумеете найти подходящие аргументы и убедить всех в своей правоте.",
"Дева" : "День окажется непростым, учитывайте это и не требуйте от себя слишком многого. Самые ответственные и глобальные задачи по возможности перенесите на более подходящее время.",
"Весы" : "Утро будет благоприятным, так что приступайте к важным задачам не откладывая. У вас получится не только справляться с рабочими вопросами, но и хорошо понимать людей.",
"Скорпион" : "Сосредоточиться на работе окажется сложнее, чем обычно. Члены семьи и коллеги начнут отвлекать вас по незначительным поводам. Вы станете принимать все слишком близко к сердцу, из-за чего сохранять спокойствие будет непросто.",
"Стрелец" : "Непросто окажется найти общий язык с коллегами, руководителем или партнерами по бизнесу. Но если вы будете помнить в первую очередь о профессиональных интересах, то все пройдет благополучно и удастся найти компромиссное решение в любых ситуациях.",
"Козерог" : "Обострится интуиция, что поможет избежать неприятностей и решить многие вопросы в вашу пользу. Но вместе с тем вероятна склонность к некоторому авантюризму. Постарайтесь не идти у нее на поводу, сейчас не время рисковать.",
"Водолей" : "С утра вы будете не слишком расположены к ударному труду. Захочется расслабиться, дать себе поблажку, следовать сиюминутным порывам. Будьте внимательны, излишнее потакание собственным слабостям может потом дорого обойтись.",
"Рыбы" : "У вас все будет получаться. Вы быстро поймете, как решить сложные задачи, взаимодействие с коллегами окажется конструктивным, переговоры с деловыми партнерами увенчаются успехом."
}
let week = {"Овен" : "Вам понадобится умение быстро переключаться и менять намеченную стратегию. Велика вероятность слишком оптимистичного взгляда на мир, из-за чего вы рискуете недооценить ситуацию и принять ошибочное решение.",
"Телец" : "Будьте осторожны в начале недели, велика вероятность получить травму или попасть в неприятную ситуацию. Бдительность и строгое соблюдение правил безопасности помогут избежать проблем.",
"Близнецы" : "Появится шанс для заметного продвижения в карьере или бизнесе. Вы окажетесь настроены конструктивно и будете готовы активно действовать. Сумеете легко отстаивать свою точку зрения и убеждать других в собственной правоте.",
"Рак" : "Первые дни недели могут сложиться не слишком удачно. Вы станете склонны спорить по любому поводу и раздражаться по мелочам. Поэтому сохранять мирную обстановку и на работе, и дома окажется не так-то просто.",
"Лев" : "День или два в начале недели окажутся напряженными, но не огорчайтесь, потом будет легче. Потребуется приложить усилия, чтобы суметь сконцентрироваться на важных вещах. Беспокойство о личных делах не позволит полноценно погрузиться в работу или учебу.",
"Дева" : "Используйте все возможности для достижения целей, на этой неделе у вас это получится особенно хорошо. Ваш вклад в общее дело поднимет авторитет в глазах руководства. Не исключено интересное предложение, связанное с карьерным ростом и повышением дохода.",
"Весы" : "Вам будет не хватать практичности и трезвого взгляда на вещи. Поэтому в начале недели постарайтесь сохранять здравомыслие, чтобы не стать жертвой манипуляций со стороны коллег или деловых партнеров.",
"Скорпион" : "Начало недели получится трудным, вам придется напрячь все силы и собрать всю выдержку, чтобы со всем справиться. Прежние договоренности могут нарушаться, а намеченные планы - срываться.",
"Стрелец" : "Деловую активность в начале недели лучше снизить. На работе займитесь текущими делами, которые не потребуют концентрации внимания. По возможности ограничьте общение с коллегами, потому что обмена интересными идеями пока не получится, вас только отвлекут от работы.",
"Козерог" : "У вас отлично сработает интуиция, которая поможет при решении любых дел. Неделя окажется благоприятной для учебы и освоения новых навыков.",
"Водолей" : "Вы станете особенно привлекательным, появится желание уделять больше внимания стилю и внешности. Даже те, кто раньше не слишком обращал на вас внимание, почувствуют к вам симпатию. Ваш профессионализм также окажется на высоте.",
"Рыбы" : "Вы будете инициативны, склонны отстаивать свои интересы и убеждать других в своей правоте. Это может сыграть вам на руку в деловых вопросах. Подходящий период начать делать то, на что у вас раньше не хватало смелости."
}