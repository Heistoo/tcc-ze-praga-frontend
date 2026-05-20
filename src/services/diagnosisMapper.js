export function mapActionPlan(data) {
  if (!data) return null;

  const actionPlan = {};

  (data.levels || []).forEach((item) => {
    actionPlan[item.level] = item.actions || [];
  });

  if (data.sources?.length) {
    actionPlan.sources = [...data.sources]
      .sort((a, b) => (a.display_order ?? 0) - (b.display_order ?? 0))
      .map((source) => ({
        id: source.id,
        name: source.name,
        detail: source.detail,
        url: source.url,
      }));
  }

  return actionPlan;
}

function mapTop3Prediction(prediction, index) {
  return {
    rank: prediction.rank ?? index + 1,
    disease: prediction.disease ?? prediction.disease_name,
    diseaseId: prediction.diseaseId ?? prediction.disease_id,
    scientificName: prediction.scientificName ?? prediction.scientific_name,
    confidence: prediction.confidence,
    severity: prediction.severity,
  };
}

export function mapDiagnosis(data) {
  if (!data) return null;

  return {
    id: data.id,
    disease: data.disease ?? data.disease_name,
    diseaseId: data.diseaseId ?? data.disease_id,
    scientificName: data.scientificName ?? data.scientific_name,
    confidence: data.confidence,
    severity: data.severity,
    description: data.description,
    actionPlan: data.actionPlan ?? data.action_plan ?? null,
    modelUsed: data.modelUsed ?? data.model_used,
    imageUrl: data.imageUrl ?? data.image_url,
    imageName: data.imageName ?? data.image_name,
    top3: (data.top3 || []).map(mapTop3Prediction),
    timestamp: data.timestamp ?? data.created_at,
  };
}

export function diagnosisToCreatePayload(diagnosis) {
  const mapped = mapDiagnosis(diagnosis);

  return {
    disease_name: mapped.disease,
    disease_id: mapped.diseaseId,
    scientific_name: mapped.scientificName || null,
    confidence: mapped.confidence,
    severity: mapped.severity,
    description: mapped.description || null,
    model_used: mapped.modelUsed || 'ensemble',
    image_url: mapped.imageUrl || null,
    image_name: mapped.imageName || null,
    top3: (mapped.top3 || []).map((prediction, index) => ({
      rank: prediction.rank ?? index + 1,
      disease_name: prediction.disease,
      disease_id: prediction.diseaseId,
      scientific_name: prediction.scientificName || null,
      confidence: prediction.confidence,
      severity: prediction.severity || null,
    })),
  };
}
