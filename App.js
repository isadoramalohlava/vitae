
import { Text, Image, StatusBar, SafeAreaView, ScrollView, StyleSheet,View, Button} from 'react-native'

export default function App() {

  return (

    <SafeAreaView style={styles.app} >

         <Button
        title="Cadastrar"
        color="#415a77"
        onPress={() => {
          alert('oi devINhouse')
        }}
      />

       <ScrollView>
      <StatusBar backgroundColor="white" />
      <Text style={styles.title}>Contatos</Text>
      <Image 
      style={styles.profile}
      source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.bZEa3ndxGqS3J8_a51om6AHaHa&pid=Api&P=0.png' }} />
      
      
      <View 
        style={styles.contatos}>
        <Image 
              style={styles.simbolos}
              source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.bZEa3ndxGqS3J8_a51om6AHaHa&pid=Api&P=0.png' }} />
        <View style={styles.agenda}>
          <Text style={styles.nome} >  Isadora Malohlava </Text>
          <Text style={styles.numero} selectable={true} dataDetectorType="phoneNumber">+55 48 99999-9999</Text>
        </View>
      </View>


      <View 
        style={styles.contatos}>
        <Image 
              style={styles.simbolos}
              source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.bZEa3ndxGqS3J8_a51om6AHaHa&pid=Api&P=0.png' }} />
        <View style={styles.agenda}>
          <Text style={styles.nome} >  Isadora Malohlava </Text>
          <Text style={styles.numero} selectable={true} dataDetectorType="phoneNumber">+55 48 99999-9999</Text>
        </View>
      </View>


      <View 
        style={styles.contatos}>
        <Image 
              style={styles.simbolos}
              source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.bZEa3ndxGqS3J8_a51om6AHaHa&pid=Api&P=0.png' }} />
        <View style={styles.agenda}>
          <Text style={styles.nome} >  Isadora Malohlava </Text>
          <Text style={styles.numero} selectable={true} dataDetectorType="phoneNumber">+55 48 99999-9999</Text>
        </View>
      </View>


      <View 
        style={styles.contatos}>
        <Image 
              style={styles.simbolos}
              source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.bZEa3ndxGqS3J8_a51om6AHaHa&pid=Api&P=0.png' }} />
        <View style={styles.agenda}>
          <Text style={styles.nome} >  Isadora Malohlava </Text>
          <Text style={styles.numero} selectable={true} dataDetectorType="phoneNumber">+55 48 99999-9999</Text>
        </View>
      </View>


      <View 
        style={styles.contatos}>
        <Image 
              style={styles.simbolos}
              source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.bZEa3ndxGqS3J8_a51om6AHaHa&pid=Api&P=0.png' }} />
        <View style={styles.agenda}>
          <Text style={styles.nome} >  Isadora Malohlava </Text>
          <Text style={styles.numero} selectable={true} dataDetectorType="phoneNumber">+55 48 99999-9999</Text>
        </View>
      </View>


      <View 
        style={styles.contatos}>
        <Image 
              style={styles.simbolos}
              source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.bZEa3ndxGqS3J8_a51om6AHaHa&pid=Api&P=0.png' }} />
        <View style={styles.agenda}>
          <Text style={styles.nome} >  Isadora Malohlava </Text>
          <Text style={styles.numero} selectable={true} dataDetectorType="phoneNumber">+55 48 99999-9999</Text>
        </View>
      </View>


      <View 
        style={styles.contatos}>
        <Image 
              style={styles.simbolos}
              source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.bZEa3ndxGqS3J8_a51om6AHaHa&pid=Api&P=0.png' }} />
        <View style={styles.agenda}>
          <Text style={styles.nome} >  Isadora Malohlava </Text>
          <Text style={styles.numero} selectable={true} dataDetectorType="phoneNumber">+55 48 99999-9999</Text>
        </View>
      </View>


      <View 
        style={styles.contatos}>
        <Image 
              style={styles.simbolos}
              source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.bZEa3ndxGqS3J8_a51om6AHaHa&pid=Api&P=0.png' }} />
        <View style={styles.agenda}>
          <Text style={styles.nome} >  Isadora Malohlava </Text>
          <Text style={styles.numero} selectable={true} dataDetectorType="phoneNumber">+55 48 99999-9999</Text>
        </View>
      </View>


      <View 
        style={styles.contatos}>
        <Image 
              style={styles.simbolos}
              source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.bZEa3ndxGqS3J8_a51om6AHaHa&pid=Api&P=0.png' }} />
        <View style={styles.agenda}>
          <Text style={styles.nome} >  Isadora Malohlava </Text>
          <Text style={styles.numero} selectable={true} dataDetectorType="phoneNumber">+55 48 99999-9999</Text>
        </View>
      </View>


      <View 
        style={styles.contatos}>
        <Image 
              style={styles.simbolos}
              source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.bZEa3ndxGqS3J8_a51om6AHaHa&pid=Api&P=0.png' }} />
        <View style={styles.agenda}>
          <Text style={styles.nome} >  Isadora Malohlava </Text>
          <Text style={styles.numero} selectable={true} dataDetectorType="phoneNumber">+55 48 99999-9999</Text>
        </View>
      </View>


      <ScrollView horizontal={true}>
       <Image 
        style={styles.simbolos}
        source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.bZEa3ndxGqS3J8_a51om6AHaHa&pid=Api&P=0.png' }} />
      <Image 
              style={styles.simbolos}
              source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.bZEa3ndxGqS3J8_a51om6AHaHa&pid=Api&P=0.png' }} />
      <Image 
              style={styles.simbolos}
              source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.bZEa3ndxGqS3J8_a51om6AHaHa&pid=Api&P=0.png' }} />
      <Image 
              style={styles.simbolos}
              source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.bZEa3ndxGqS3J8_a51om6AHaHa&pid=Api&P=0.png' }} />

      <Image 
              style={styles.simbolos}
              source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.bZEa3ndxGqS3J8_a51om6AHaHa&pid=Api&P=0.png' }} />
      <Image 
              style={styles.simbolos}
              source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.bZEa3ndxGqS3J8_a51om6AHaHa&pid=Api&P=0.png' }} />
      <Image 
              style={styles.simbolos}
              source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.bZEa3ndxGqS3J8_a51om6AHaHa&pid=Api&P=0.png' }} />

      </ScrollView>

   
        
 
      </ScrollView>
    </SafeAreaView>

  )
}

const styles=StyleSheet.create({
  app: {
    backgroundColor: 'white',
    flex: 1
  },

title: {
  color: '#1b263b',
  fontSize: 24,
  alignSelf: 'center',
  marginVertical: 20

},

profile: {
  width: 100,
  height: 100,
  borderRadius: 50,
  alignSelf: 'center',
  marginVertical: 20

},
nome:{
  fontSize: 18,
  color: 'black',
  textAlign: 'center',
  fontWeight: 'bold',
  alignSelf: 'center',
  marginVertical: 10
},

numero:{
alignSelf: 'center',
color: '#778da9'
},

simbolos:{
  width: 50,
  height: 50,
  margin: 10,
  
},

contatos:{
borderColor: 'black',
flexDirection: 'row',
borderWidth: 1,
borderStyle: 'solid',
alignSelf: 'center',
width: '90%',
padding: 10,
borderRadius: 10,
marginVertical: 10,

},

agenda: {
flexDirection: 'column',
alignSelf: 'center'

}
})