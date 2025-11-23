exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type'
  };

  try {
    const examData = JSON.parse(event.body);
    
    const processedExam = {
      ...examData,
      processedAt: new Date().toISOString(),
      status: 'مُعالج عبر Netlify',
      netlifyProcessed: true
    };

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        data: processedExam,
        message: 'تم المعالجة! 🚀'
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: error.message
      })
    };
  }
};