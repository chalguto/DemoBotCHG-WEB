const params = BotChat.queryParams(location.search);
const user = {
    id: params['userid'] || 'userid',
    name: params['username'] || 'username'
};
const bot = {
    id: params['botid'] || 'botid',
    name: params['botname'] || 'botname'
};
window.botchatDebug = false;

const speechOptions = {
    speechRecognizer: new CognitiveServices.SpeechRecognizer({
        subscriptionKey: '9b48f41f9a7e4e2c9588f7b1dfaee2b2'
    }),
    speechSynthesizer: new CognitiveServices.SpeechSynthesizer({
        gender: CognitiveServices.SynthesisGender.Female,
        subscriptionKey: '9b48f41f9a7e4e2c9588f7b1dfaee2b2',
        voiceName: 'Microsoft Server Speech Text to Speech Voice (en-ES, JessaRUS)'
    })
};

BotChat.App({
    bot: bot,
    resize: 'detect',
    speechOptions: speechOptions,
    user: user,
    locale: 'es-es',
    directLine: {
        secret: 'eX1WlG2aaI8.cwA.EzU.ATfNvRTuX_dsfYXxbWQsxnFytXWWVJKSHcYb0EURM78',
        webSocket: false
    }
}, document.getElementById('BotChat'));