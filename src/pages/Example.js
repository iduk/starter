import React from 'react'
import Img from '../assets/images/macbook.png'

function Example() {
  return (
    <div>
      <div className="pb-3">
        <h1 className="display-1 pb-4"></h1>
        <figcaption className="blockquote-footer">
          Static Pages, by iduk
        </figcaption>
      </div>

      <section className="doc-section">
        <h5>Typography</h5>
        <div className="py-4 text-center">
          <div className="flex gap-4 items-center">
            <p className="text-xs">xs</p>
            <p className="text-sm">sm</p>
            <p className="text-md">md</p>
            <p className="text-lg">lg</p>
            <p className="text-xl">xl</p>
            <p className="text-2xl">2xl</p>
            <p className="text-3xl">3xl</p>
          </div>
        </div>
        <div className="py-4 text-center">
          <div className="flex gap-4 items-center">
            <p className="h6">H6</p>
            <p className="h5">H5</p>
            <p className="h4">H4</p>
            <p className="h3">H3</p>
            <p className="h2">H2</p>
            <p className="h1">H1</p>
          </div>
        </div>
        <div className="py-8 text-center">
          <div className="flex gap-4 items-center">
            <p className="font-thin">thin</p>
            <p className="font-light">light</p>
            <p className="font-normal">normal</p>
            <p className="font-medium">medium</p>
            <p className="font-bold">bold</p>
            <p className="font-extrabold">extrabold</p>
          </div>
        </div>

        <div className="grid btns my-2">
          <button className="btn anim-bg-gradient">
            Gradient Animate Button
          </button>
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
          <figure className="effect" style={{ maxWidth: 500 }}>
            <img
              className="effect--child img-fluid"
              src={Img}
              alt="Image description"
            />
          </figure>
        </article>
      </section>

      <section className="doc-section">
        <h5>Scroll Snap</h5>

        <div className="scroll-snap" style={{ height: 500, maxWidth: 500 }}>
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
