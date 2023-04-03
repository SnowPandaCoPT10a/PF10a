import React from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'



const Chatbot = () => {

	    const theme = {
        background: '#f5f8fb',
        headerBgColor: '#18BBF0',
        headerFontColor: '#fff',
        headerFontSize: '16px',
        botBubbleColor: '#18BBF0',
        botFontColor: '#fff',
        userBubbleColor: 'grey',
        userFontColor: '#fff',
    }

    const config = {
        floating: true,
        userAvatar: "https://res.cloudinary.com/pflet/image/upload/v1662686111/Let/image/persona_logeada_hatkhk.png"
    };


    const steps = [
       		 {
         		 id: "1",
        	    message: "Acepten los Pull manga de gatos",
        	   
       		 },
        ]


	return (
		<ThemeProvider theme={theme}>
            <ChatBot
                steps={steps}
                {...config} />
        </ThemeProvider>
	)
}



export default Chatbot