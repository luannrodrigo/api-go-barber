import handlebars from 'handlebars';
import IParseMailTemplateDTO from '../dtos/IParseMailTemplatesDTO';
import IMailTemplateProvier from '../models/IMailTemplateProvider';

export default class FakeMailTemplateProvider implements IMailTemplateProvier {
  public async parse({
    template,
    variables,
  }: IParseMailTemplateDTO): Promise<string> {
    const parseTemplate = handlebars.compile(template);

    return parseTemplate(variables);
  }
}
