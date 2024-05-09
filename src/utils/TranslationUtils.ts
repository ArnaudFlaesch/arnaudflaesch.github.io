export function getTranslation(
  textCode: string,
  language: string,
  namespaceCode: string,
  nameSpaceDatas: { node: { ns: string; data: string; language: string } }[]
) {
  const DEFAULT_NAMESPACE = 'translation';
  let translationData;
  translationData = nameSpaceDatas.filter(
    (nameSpaceData) => nameSpaceData.node.ns === namespaceCode && nameSpaceData.node.language === language
  );
  if (!translationData.length) {
    translationData = nameSpaceDatas.filter(
      (nameSpaceData) => nameSpaceData.node.ns === DEFAULT_NAMESPACE && nameSpaceData.node.language === language
    );
  }
  return JSON.parse(translationData[0].node.data)[textCode];
}
