export const article = {
  title: "React & Javascript Optimization Techniques",
  userData: {
    userImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/globers-app.appspot.com/o/IMG_6485.png?alt=media&token=89ddbcc4-cfb3-4475-a25e-14fde2e3b669",
    companyImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/globers-app.appspot.com/o/IMG_6488.png?alt=media&token=608a6598-74df-4d00-823d-60d70b329cd5",
    name: "Rafael Rojas",
    publishedBy: "Globant",
    length: "21 min read",
    created: "Jan 16, 2024",
    profileLink: "https://medium.com/@rafaelrojasdev",
    companyProfileLink: "https://medium.com/globant",
  },
  photo: {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/0*Bdz6s4_QyPto9ddw",
    photoCredit: "Clément Hélardot",
    photoSource: "Unsplash",
    photographerUrl:
      "https://unsplash.com/@clemhlrdt?utm_source=medium&utm_medium=referral",
    photoSourceUrl:
      "https://unsplash.com/?utm_source=medium&utm_medium=referral",
  },
  mainText:
    "When we begin a project, we tend to focus on things like scalability, usability, availability, security, and others. But, as the application grows, we may observe a decline in its speed and performance. It is often only at this point that we recognize the need for optimization.",
  secondaryText:
    'In this article, we will present some of the most common techniques for optimizing code, which can be implemented in any application; we will also show optimization techniques using sample code written in <a aria-label="JavaScript offcial doc" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" class="underline underline-offset-3">JavaScript<a/> and <a aria-label="JavaScript offcial doc" href="https://react.dev/" class="underline underline-offset-3">React<a/>. The following techniques are gonna be covered:',
  techniquesCovered: ["Debouncing", "Throttling", "Memoization"],
  tertiaryText:
    "There are many more techniques available, but in this article, we will focus on the ones already mentioned.",
  moreTechniquesInfo:
    "There are many more techniques available, but in this article, we will focus on the ones already mentioned.",
  debouncing: {
    title: "Deboucing",
    description:
      "Debouncing is a programming technique used to optimize the processing of functions that consume a lot of execution time. This technique involves preventing those functions from executing repeatedly without control, which helps improve the performance of our applications.",

    code: "// Example 1\n\nconst debounce = (callback, time = 300) => {\n  let timer;\n\n  return () => {\n    clearTimeout(timer);\n    timer = setTimeout(callback, time);\n  };\n};",
  },

  throttling: {
    title: "Throttling",
    description:
      "Throttling is a technique similar to debouncing, as both are used to limit the frequency of function calls. The difference is that throttling does not clear the timer every time the function is called, but instead uses a pause condition to avoid creating new timers. In other words, while the function is being called, it will not wait until the last call to execute, but will only call the function if it enters the time interval where the pause is disabled.",

    code: "const throttle = (callback, time = 300) => {\n\tlet pause = false;\n\n\treturn () => {\n\t\tif (pause) return;\n\t\tpause = true;\n\t\tcallback();\n\t\tsetTimeout(() => {\n\t\t\tpause = false;\n\t\t}, time);\n\t};\n};",
  },
  memoization: {
    title: "Memoization",
    description:
      "Memoization is a technique that involves storing the result of a function in a memory space that allows for later retrieval. This is done to avoid having to recalculate the result every time the function is called with the same parameters. This technique is used for functions that consume a lot of resources. In such cases, memoization can improve performance and speed in obtaining results.",

    code: 'const memoize = fn => {\n  const cache = new Map();\n  return (...args) => {\n    const key = args.join("-");\n    if (cache.has(key)) return cache.get(key);\n    const result = fn(...args);\n    cache.set(key, result);\n    // you can add a console.log(cache) here to see how cache is being filled.\n    return result;\n  };\n};\n\nconst getFactorial = memoize(n => {\n  if (n === 1 || n === 0) return 1;\n  return n * getFactorial(n - 1);\n});\n\n// it runs 100 times\ngetFactorial(100);\n\n// all values below 100 were memoized previously, so it runs just once\ngetFactorial(99);',
  },
  tags: [
    {
      tag: "JavaScript",
      url: "https://medium.com/tag/javascript?source=post_page-----20d8d167dadd---------------javascript-----------------",
    },
    {
      tag: "Optimization",
      url: "https://medium.com/tag/optimization?source=post_page-----20d8d167dadd---------------optimization-----------------",
    },
    {
      tag: "Performance",
      url: "https://medium.com/tag/performance?source=post_page-----20d8d167dadd---------------performance-----------------",
    },
    {
      tag: "React",
      url: "https://medium.com/tag/react?source=post_page-----20d8d167dadd---------------react-----------------",
    },
  ],
};

export type TArticle = typeof article;
export type TUserData = typeof article.userData;
