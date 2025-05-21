import Generator from 'yeoman-generator';

type Answers = {
  appName: string;
  namespace: string;
};

export default class extends Generator {
  answers!: Answers;

  async prompting(): Promise<void> {
    this.answers = await this.prompt<Answers>([
      { type: 'input', name: 'appName', message: 'App name:' },
      { type: 'input', name: 'namespace', message: 'Namespace:' },
    ]);
  }

  writing(): void {
    const { appName, namespace } = this.answers;

    this.fs.copyTpl(
      this.templatePath('helmrelease.yaml.ejs'),
      this.destinationPath(`${appName}/helmrelease.yaml`),
      { appName, namespace }
    );

    this.fs.copyTpl(
      this.templatePath('kustomization.yaml.ejs'),
      this.destinationPath(`${appName}/kustomization.yaml`)
    );

    this.fs.copyTpl(
      this.templatePath('values.yaml'),
      this.destinationPath(`${appName}/values.yaml`)
    );
  }
}
