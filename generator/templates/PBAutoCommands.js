/**
 * Pandoras Box Automation
 * Node-js v{{ version }} @{{ time }} <support@coolux.de>
 */

const { execute } = require('./PBAutoCore')

{% for command in commands %}
/**
 * {{ command.name }}
 * {{ command.help }}
 *
{%- for a in command.send %}
 * @param {{ '{' }}{{ types[a.type_id].name }}{{ '}' }} {{ a.name }} {{ '- ' + a.help if a.help }}
{%- endfor %}
 *
{%- for a in command.recv %}
 * @returns {{ '{' }}{{ types[a.type_id].name }}{{ '}' }} {{ '- ' + a.help if a.help }}
{%- endfor %}
 */
module.exports.{{ command.name }} = ({%- for a in command.send %}{{ a.name }}{{ ', ' if not loop.last }}{%- endfor %}) => {
  return execute('{{ command.name }}', { {% for a in command.send %}{{ a.name }}{{ ', ' if not loop.last }}{% endfor %} })
}
{% endfor %}
