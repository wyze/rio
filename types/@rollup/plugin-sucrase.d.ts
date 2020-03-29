import { FilterPattern } from '@rollup/pluginutils'
import { Plugin } from 'rollup'
import { Options as SucraseOptions } from 'sucrase'

export interface Options extends SucraseOptions {
  /**
   * Determine which files are transpiled by Typescript (all `.ts` and
   * `.tsx` files by default).
   */
  include?: FilterPattern
  /**
   * Determine which files are transpiled by Typescript (all `.ts` and
   * `.tsx` files by default).
   */
  exclude?: FilterPattern
}

export default function sucrase(options?: Options): Plugin
