import Polyglot from '../src/';
import i18next from 'i18next';


describe('polyglot format', () => {

  describe('basic parse', () => {
    let polyglot;

    before(() => {
      polyglot = new Polyglot();
    });


    it('should parse', () => {
      expect(polyglot.parse('Hola, %{name}.', { name: 'DeNiro' }, 'en', 'ns')).to.eql('Hola, DeNiro.');
      expect(polyglot.parse('%{smart_count} car |||| %{smart_count} cars', { smart_count: 0 }, 'en', 'ns')).to.eql('0 cars');
      expect(polyglot.parse('%{smart_count} car |||| %{smart_count} cars', { smart_count: 1 }, 'en', 'ns')).to.eql('1 car');
    });

  });

  describe('with i18next', () => {

    before(() => {
      i18next
        .use(Polyglot)
        .init({
          lng: 'en',
          resources: {
            en: {
              translation: {
                'name': 'Hola, %{name}.',
                'count': '%{smart_count} car |||| %{smart_count} cars'
              }
            }
          }
        });
    });

    it('should parse', () => {
      expect(i18next.t('name', { name: 'DeNiro' })).to.eql('Hola, DeNiro.');
      expect(i18next.t('count', { smart_count: 1 })).to.eql('1 car');
    });

  });

});
