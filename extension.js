/* extension.js
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * SPDX-License-Identifier: GPL-2.0-or-later
 */
import { Extension } from "resource:///org/gnome/shell/extensions/extension.js";
import Meta from "gi://Meta";

export default class PlainExampleExtension extends Extension {
  enable() {
    let cursor_tracker = Meta.CursorTracker.get_for_display(global.display);
    this._cursor_tracker = cursor_tracker;

    const cursorChangedHandler = () => {
      const [point, _] = cursor_tracker.get_pointer();
      const { x, y } = point;
      console.log("Cursor moved to", x, y);
    };

    // cursor_tracker.connect("cursor-changed", cursorChangedHandler);
    cursor_tracker.connect("position-invalidated", cursorChangedHandler);
  }

  disable() { }
}
