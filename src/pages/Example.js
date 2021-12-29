import React from 'react'
import Img from '../assets/images/macbook.png'

function Example() {
  return (
    <div className="container">
      <div className="pb-3">
        <h1 className="display-1 pb-4">Example</h1>
        <figcaption className="blockquote-footer">Static Pages, by iduk</figcaption>
      </div>

      <section className="doc-section">
        <h5>Buttons</h5>
        <div className="grid btns my-2">
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-soft-primary">Primary</button>
          <button className="btn btn-outline-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-soft-secondary">Secondary</button>
          <button className="btn btn-outline-secondary">Secondary</button>
          <button className="btn btn-link">Link</button>
        </div>
        <div className="grid btns my-2">
          <button className="btn btn-secondary btn-lg">Large</button>
          <button className="btn btn-secondary">Default</button>
          <button className="btn btn-secondary btn-sm">Small</button>
        </div>
        <div className="grid btns my-2">
          <button className="btn anim-bg-gradient">Gradient Animate Button</button>
        </div>
      </section>

      <section className="doc-section">
        <h5>Text Color Shades</h5>
        <p>
          text-{'{'}theme{'}'}-{'{'}value{'}'}
        </p>
        <article className="row">
          <div className="col">
            <p className="h6 text-primary-100">text-primary-100</p>
            <p className="h6 text-primary-200">text-primary-200</p>
            <p className="h6 text-primary-300">text-primary-300</p>
            <p className="h6 text-primary-400">text-primary-400</p>
            <p className="h6 text-primary-500">text-primary-500</p>
            <p className="h6 text-primary-600">text-primary-600</p>
            <p className="h6 text-primary-700">text-primary-700</p>
            <p className="h6 text-primary-800">text-primary-800</p>
            <p className="h6 text-primary-900">text-primary-900</p>
          </div>
          <div className="col">
            <p className="h6 text-secondary-100">text-secondary-100</p>
            <p className="h6 text-secondary-200">text-secondary-200</p>
            <p className="h6 text-secondary-300">text-secondary-300</p>
            <p className="h6 text-secondary-400">text-secondary-400</p>
            <p className="h6 text-secondary-500">text-secondary-500</p>
            <p className="h6 text-secondary-600">text-secondary-600</p>
            <p className="h6 text-secondary-700">text-secondary-700</p>
            <p className="h6 text-secondary-800">text-secondary-800</p>
            <p className="h6 text-secondary-900">text-secondary-900</p>
          </div>
          <div className="col">
            <p className="h6 text-success-100">text-success-100</p>
            <p className="h6 text-success-200">text-success-200</p>
            <p className="h6 text-success-300">text-success-300</p>
            <p className="h6 text-success-400">text-success-400</p>
            <p className="h6 text-success-500">text-success-500</p>
            <p className="h6 text-success-600">text-success-600</p>
            <p className="h6 text-success-700">text-success-700</p>
            <p className="h6 text-success-800">text-success-800</p>
            <p className="h6 text-success-900">text-success-900</p>
          </div>
          <div className="col">
            <p className="h6 text-warning-100">text-warning-100</p>
            <p className="h6 text-warning-200">text-warning-200</p>
            <p className="h6 text-warning-300">text-warning-300</p>
            <p className="h6 text-warning-400">text-warning-400</p>
            <p className="h6 text-warning-500">text-warning-500</p>
            <p className="h6 text-warning-600">text-warning-600</p>
            <p className="h6 text-warning-700">text-warning-700</p>
            <p className="h6 text-warning-800">text-warning-800</p>
            <p className="h6 text-warning-900">text-warning-900</p>
          </div>
          <div className="col">
            <p className="h6 text-danger-100">text-danger-100</p>
            <p className="h6 text-danger-200">text-danger-200</p>
            <p className="h6 text-danger-300">text-danger-300</p>
            <p className="h6 text-danger-400">text-danger-400</p>
            <p className="h6 text-danger-500">text-danger-500</p>
            <p className="h6 text-danger-600">text-danger-600</p>
            <p className="h6 text-danger-700">text-danger-700</p>
            <p className="h6 text-danger-800">text-danger-800</p>
            <p className="h6 text-danger-900">text-danger-900</p>
          </div>
        </article>
      </section>

      <section className="doc-section">
        <h5>Text Color Shades</h5>
        <p>
          text-{'{'}theme{'}'}-{'{'}value{'}'}
        </p>
        <div>
          <h3 className="anim-underline-fx d-inline-block">텍스트 밑줄 효과, 텍스트에 밑줄을 쫘악</h3>
        </div>
      </section>

      <section className="doc-section">
        <h5>Background Color Shades</h5>
        <p>
          bg-{'{'}theme{'}'}-{'{'}value{'}'}
        </p>
        <div>
          <span className="box bg-primary-100" />
          <span className="box bg-primary-200" />
          <span className="box bg-primary-300" />
          <span className="box bg-primary-400" />
          <span className="box bg-primary-500" />
          <span className="box bg-primary-600" />
          <span className="box bg-primary-700" />
          <span className="box bg-primary-800" />
          <span className="box bg-primary-900" />
        </div>
        <div>
          <span className="box bg-secondary-100" />
          <span className="box bg-secondary-200" />
          <span className="box bg-secondary-300" />
          <span className="box bg-secondary-400" />
          <span className="box bg-secondary-500" />
          <span className="box bg-secondary-600" />
          <span className="box bg-secondary-700" />
          <span className="box bg-secondary-800" />
          <span className="box bg-secondary-900" />
        </div>
        <div>
          <span className="box bg-success-100" />
          <span className="box bg-success-200" />
          <span className="box bg-success-300" />
          <span className="box bg-success-400" />
          <span className="box bg-success-500" />
          <span className="box bg-success-600" />
          <span className="box bg-success-700" />
          <span className="box bg-success-800" />
          <span className="box bg-success-900" />
        </div>
        <div>
          <span className="box bg-warning-100" />
          <span className="box bg-warning-200" />
          <span className="box bg-warning-300" />
          <span className="box bg-warning-400" />
          <span className="box bg-warning-500" />
          <span className="box bg-warning-600" />
          <span className="box bg-warning-700" />
          <span className="box bg-warning-800" />
          <span className="box bg-warning-900" />
        </div>
        <div>
          <span className="box bg-danger-100" />
          <span className="box bg-danger-200" />
          <span className="box bg-danger-300" />
          <span className="box bg-danger-400" />
          <span className="box bg-danger-500" />
          <span className="box bg-danger-600" />
          <span className="box bg-danger-700" />
          <span className="box bg-danger-800" />
          <span className="box bg-danger-900" />
        </div>
        <div>
          <span className="box bg-grays-100" />
          <span className="box bg-grays-200" />
          <span className="box bg-grays-300" />
          <span className="box bg-grays-400" />
          <span className="box bg-grays-500" />
          <span className="box bg-grays-600" />
          <span className="box bg-grays-700" />
          <span className="box bg-grays-800" />
          <span className="box bg-grays-900" />
        </div>
      </section>

      <section className="doc-section">
        <h5>Background Color &amp; Opacity</h5>
        <p>
          bg-{'{'}theme{'}'} bg-opacity-{'{'}value{'}'}
        </p>
        <article className="d-flex gap-3">
          <div>
            <span className="box bg-primary bg-opacity-10" />
            <span className="box bg-primary bg-opacity-25" />
            <span className="box bg-primary bg-opacity-50" />
            <span className="box bg-primary bg-opacity-75" />
          </div>
          <div>
            <span className="box o-secondary-20" />
            <span className="box o-secondary-40" />
            <span className="box o-secondary-60" />
            <span className="box o-secondary-80" />
          </div>
        </article>
      </section>

      <section className="doc-section">
        <h5>3D Transform Effect</h5>
        <article>
          <figure className="effect">
            <img className="effect--child img-fluid" src={Img} alt="Image description" />
          </figure>
        </article>
      </section>

      <section className="doc-section">
        <h5>Scroll Snap</h5>

        <div className="scroll-snap mx-auto" style={{ height: 500 }}>
          <section className="scroll-snap__child">
            <h1>1</h1>
          </section>
          <section className="scroll-snap__child">
            <h1>2</h1>
          </section>
          <section className="scroll-snap__child">
            <h1>3</h1>
          </section>
          <section className="scroll-snap__child">
            <h1>4</h1>
          </section>
        </div>
      </section>
    </div>
  )
}

export default Example
