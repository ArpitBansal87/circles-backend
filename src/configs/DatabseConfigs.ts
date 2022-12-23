export class DatabaseConfigs {
  constructor(
    name: string,
    connector: string,
    url: string,
    host: string,
    port: number,
    user: string,
    password: string,
    database: string,
    useNewUrlParser: boolean
  ) {
    this._name = name;
    this._connector = connector;
    this._url = url;
    this._host = host;
    this._user = user;
    this._password = password;
    this._port = port;
    this._database = database;
    this._useNewUrlParser = useNewUrlParser;
  }
  private readonly _name: string;
  public get name(): string {
    return this._name;
  }
  private readonly _connector: string;
  public get connector(): string {
    return this._connector;
  }
  private readonly _url: string;
  public get url(): string {
    return this._url;
  }
  private readonly _host: string;
  public get host(): string {
    return this._host;
  }
  private readonly _port: number;
  public get port(): number {
    return this._port;
  }
  private readonly _user: string;
  public get user(): string {
    return this._user;
  }
  private readonly _password: string;
  public get password(): string {
    return this._password;
  }
  private readonly _database: string;
  public get database(): string {
    return this._database;
  }
  private readonly _useNewUrlParser: boolean;
  public get useNewUrlParser(): boolean {
    return this._useNewUrlParser;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get plainObject(): any {
    return {
      name: this.name,
      url: this.url,
      connector: this.connector,
      host: this.host,
      port: this.port,
      user: this.user,
      password: this.password,
      database: this.database,
      useNewUrlParser: this.useNewUrlParser,
    }
  }


}
