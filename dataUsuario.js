module.exports = function () {
  var data = {
    users: [
      {
        id:1,
        nameUser: "Luis Pérez Reyes",
        typeUser: "padre de familia",
        emailUser:"lperez@gmail.com",
        passwordUser: "123%&",
        districUser:"San Juan de Lurigancho",
        ageUser: 27

      },


      {
        id:2,
        nameUser: "Camilo andrade Guerra",
        typeUser: "universitario",
        emailUser:"Camilo@gmail.com",
        passwordUser: "123%&",
        districUser:"Los Olivos",
        ageUser: 17

      },
      {
        id:3,
        nameUser: "Rosa del Campo Reyes",
        typeUser: "padre de familia",
        emailUser:"Rosa@gmail.com",
        passwordUser: "123%&",
        districUser:"San Isidro",
        ageUser: 27

      },
      {
        id:4,
        nameUser: "Karina Cano Cardenas",
        typeUser: "universitario",
        emailUser:"karina@gmail.com",
        passwordUser: "123%&",
        districUser:"San Miguel",
        ageUser: 14

      },
      {
        id:5,
        nameUser: "Luis Pérez Reyes",
        typeUser: "Padre de Familia",
        emailUser:"lperez@gmail.com",
        passwordUser: "123%&",
        districUser:"San Juan de Lurigancho",
        ageUser: 27

      }
    ],
    colegios:[
      {
        id: 1,
        name: "Pitágoras",
	      district: "Los olivos",
        pension:144,
        photo: "https://www.pitagorasjauja.com/upldba/archvs/1/fot_509.jpeg"
      },
      {
        id: 2,
        name: "Innova School",
        district: "San Miguel",
        pension: 177,
        photo: "https://www.innovaschools.edu.pe/wp-content/uploads/2017/05/foto-fondo-sede-1920x1080.jpg"
      },
      {
        id: 3,
        name: "Pamer",
	      district: "Chorrillos",
        pension:243,
        photo: "https://pamer.edu.pe/colegios/wp-content/uploads/sites/2/2023/01/pamer-chorrillos-2.jpg"
      }
    ],
    teachers: [
      {
        id: 1,
        name: "Javier Ulisis",
        course: "Calculo I",
        pension: 90,
        photo: "https://www.aprendemas.com/co/blog/images/2021/10/profesor_mal_tips.jpg"
      },
      {
        id: 2,
        name: "Jose Mascaro",
        course: "Programación OPP",
        pension: 90,
        photo: "https://apliense.xtec.cat/prestatgeria/centres/a8062717_2821/57b333cfc99f.jpg"
      },
      {
        id: 3,
        name: "Susano Baca",
        course: "Ética",
        pension: 80,
        photo: "https://www.unav.edu/documents/10174/0/noticia_Rhonheimer/fd945a65-e502-0fe4-c44f-ff9e7f5578ce"
      },
      {
        id: 4,
        name: "Laura Rosini",
        course: "Calculo III",
        pension: 50,
        photo: "https://elcomercio.pe/resizer/TiSfSKEA9fIcZY67XvsGONEgTZY=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/WCC44QB3UFFANKATRYS5P3KPQQ.png"
      },
      {
        id: 5,
        name: "Daniel Perez",
        course: "JAVA básica",
        pension: 60,
        photo: "https://experienciajoven.com/wp-content/uploads/2023/01/tipos-de-maestros-comediante.jpg"
      },
      {
        id: 6,
        name: "Jose Mascaro",
        course: "Matemática discreta",
        pension: 70,
        photo: "https://images.ecestaticos.com/z3OlGPe8BhnLmt2L8zKOnvTYN_8=/0x0:999x750/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F944%2F816%2Fe81%2F944816e8192f7094ef5cc02ada386667.jpg"
      }
    ]
  }
  return data
}
