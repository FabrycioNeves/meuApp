
import { StyleSheet } from 'react-native'

const styles=StyleSheet.create({
    conatainer:{
        flex:1,
        backgroundColor:"#fff",
   justifyContent:'center',
   alignItems:'center',

     
    },

    padrao:{    
    marginTop:60,    
    backgroundColor:'#fff',
    justifyContent:'space-between',
    alignItems:'center',
   flexDirection:'row',
    height:50,
    width:'80%',
    borderRadius:10
    },
    text:{
    marginLeft:10,
    
    },
    swt:{
        marginRight:15

    },
    holders: {  
        position: 'absolute',
        marginTop:60,
        top: 80, // Mantém a altura desejada
        left: '50%', 
        transform: [{ translateX: -0.35 * 480 }], // Ajusta com base na largura do elemento
        height: 200,
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'flex-start', // Alinha os itens no topo
        alignItems: 'center',
        flexDirection: 'column', // Organiza os itens na vertical (coluna)
        padding: 10, 
    },
    textoNoti:{
       alignSelf:'flex-start',
        fontSize:16,
        marginLeft:15,
        marginTop:10,
        

    },
   

    contInput:{
        marginTop:5,
        height:40,
        backgroundColor:"#f7f7f7",
        width:300,
        borderRadius:20
        

    },
    inputText:{
        margin:10,

    },
    overlayText: {
        position: 'absolute', // Faz o texto ser posicionado fora do quadrado
        top: 115, // Ajuste o valor para posicionar acima do quadrado
        left: '10%',
        fontSize: 16,
        zIndex: 10, // Garante que o texto sobreponha o quadrado
      },
          
        alarme: {    
            position: 'absolute', // Adicionado
            top: 390, // Ajuste para ficar abaixo de holders
            left: '50%',
            transform: [{ translateX: -0.3 * 400 }], // Ajuste conforme necessário
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            height: 50,
            width: '60%',
            borderRadius: 10
        
    },

})

export default styles