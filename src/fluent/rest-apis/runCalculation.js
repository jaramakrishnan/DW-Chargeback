(function process(request, response) {
    var runId = request.pathParams.runId;
    if (!runId) {
        response.setStatus(400);
        response.setBody({ error: 'runId is required' });
        return;
    }

    var engine = new ChargebackEngine();
    var result = engine.runCalculation(runId);

    if (result) {
        var parsed = typeof result === 'string' ? JSON.parse(result) : result;
        if (parsed.success) {
            response.setStatus(200);
            response.setBody({ result: { total_amount: parsed.totalAmount, lines_generated: parsed.linesGenerated, errors: parsed.errors } });
        } else {
            response.setStatus(500);
            response.setBody({ error: parsed.error });
        }
    } else {
        response.setStatus(500);
        response.setBody({ error: 'Calculation failed' });
    }
})(request, response);
