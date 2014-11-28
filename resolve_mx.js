/**
 *
 * @author Michael Pearson <github@m.bip.io>
 * Copyright (c) 2010-2014 Michael Pearson https://github.com/mjpearson
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

function ResolveMX() {}

ResolveMX.prototype = {};

ResolveMX.prototype.invoke = function(imports, channel, sysImports, contentParts, next) {
  var tldTools = this.pod.tldTools();
  var tokens = tldTools.extract(imports.url),
  domain = tokens.inspect.getDomain();

  if (!domain) {
    next('Could not extract domain for ' + imports.url);
  } else {
    this.pod.get().resolveMx(domain, function(err, records) {
      if (err) {
        next(err);
      } else {
        var exports = {
          mx : [],
          mx_first : null
        },
        mx;

        var p;
        for (var i = 0; i < records.length; i++) {
          mx = records[i];
          exports.mx.push(mx);

          if (undefined === p || p <= mx.priority) {
            exports.mx_first = mx;
            p = mx.priority;
          }
        }
        next(false, exports);
      }
    });
  }
}

// -----------------------------------------------------------------------------
module.exports = ResolveMX;