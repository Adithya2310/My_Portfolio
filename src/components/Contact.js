import React from 'react'

const Contact = () => {
  return (
    <div>
  <section class="lg:pt-24 pb-8 sm:pt-5">
    <div class="sm:px-10 md:px-0 lg:px-0 flex flex-wrap justify-center lg:text-left text-center">
      <div class="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
        <h2 class="text-5xl pb-3 font-medium mb-6">Contact</h2>
        <div className='leading-8 text-gray-800 dark:text-gray-200'>
            <p class="mb-2">+91 636-222-3700</p>
            <p class="mb-2">Bangalore, 560056, India</p>
            <p class="mb-2">adithyanandi099@gmail.com</p>
        </div>
      </div>
      <div class="grow-0 shrink-0 basis-auto rounded-lg  md:mb-0 w-2/3 md:w-6/12 px-3 py-5 lg:px-14 dark:bg-gray-800">
        <form action="https://formspree.io/f/mayzazwy" method='post'>
          <div class="form-group mb-3">
            <input type="text" name="Name" class="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none" id="exampleInput7"
              placeholder="Name"/>
          </div>
          <div class="form-group mb-3">
            <input type="email" name="Email" class="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none" id="exampleInput8"
              placeholder="Email address"/>
          </div>
          <div class="form-group mb-6">
            <textarea class="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none
            " id="exampleFormControlTextarea13" rows="3" name="Message" placeholder="Message"></textarea>
          </div>
          <button type="submit" class="
            w-full
            px-6
            py-2.5
            bg-teal-500
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-teal-600 hover:shadow-lg
            focus:bg-teal-600 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-teal-700 active:shadow-lg
            transition
            duration-150
            ease-in-out">Send</button>
        </form>
      </div>
    </div>
    <div className="text-center mt-20 mb-4">
      <hr className="border-gray-500 border-1 mx-auto" />
      <p className="text-gray-600 text-sm mt-2">&copy; CopyRight Reserved By Adithya N G</p>
    </div>
  </section>

</div>

  )
}

export default Contact