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
        subscriptionKey: '02321889a65047a4b36d4a163f41dd97'
    }),
    speechSynthesizer: new CognitiveServices.SpeechSynthesizer({
        gender: CognitiveServices.SynthesisGender.Female,
        subscriptionKey: '02321889a65047a4b36d4a163f41dd97',
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